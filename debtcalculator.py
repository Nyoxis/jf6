#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
"""
import sqlite3
db = 'Bill.db'


from telegram.ext import Updater, CommandHandler, MessageHandler, Filters
import logging

# Enable logging
logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                    level=logging.INFO)

logger = logging.getLogger(__name__)

REQUEST_KWARGS={
    'proxy_url': 'socks5://45.32.254.19:1080'}
TOKEN='604208599:AAG8iO1uRnV5BbQmRC4DSQMSoDIGHCETkms'


def checkstatus(update,userid = None):
    chatid = update.message.chat.id
    if userid is None:
        userid = update.message.from_user.id
    
    conn = sqlite3.connect(db)
    cursor = conn.cursor()
    
    sql = "SELECT credit FROM Bill WHERE chat_id = ? AND user_id = ? "
    cursor.execute(sql,(chatid,userid)) 
    credit = cursor.fetchone()
    
    conn.close()

    if credit is None:
        return credit
    else:
        return int(credit[0])

def idlist(chatid):

    conn = sqlite3.connect(db)
    cursor = conn.cursor()
    
    sql = "SELECT user_id FROM Bill WHERE chat_id = ?"
    cursor.execute(sql, (chatid,))
    idlist = [item[0] for item in cursor.fetchall()]
    
    conn.close()
    return idlist

def inccredit(amount,chatid,uids = None):

    conn = sqlite3.connect(db)
    cursor = conn.cursor()
    if uids is None:
        sql = "UPDATE Bill SET credit = credit + ? WHERE chat_id = ?"
        cursor.execute(sql,(amount, chatid))
    else:
        if not isinstance(uids, (list, tuple)):
            uids = [uids]
        sql = "UPDATE Bill SET credit = credit + ? WHERE chat_id = ? AND user_id = ? "
        for uid in uids:
            cursor.execute(sql,(amount, chatid, uid))
    conn.commit()
    conn.close()

def finduser(update, username):
    chatid = update.message.chat.id
    
    conn = sqlite3.connect(db)
    cursor = conn.cursor()
    
    sql = "SELECT user_id FROM Bill WHERE chat_id = ? AND username = ? "
    cursor.execute(sql,(chatid,username)) 
    userid = cursor.fetchone()
    
    conn.close()

    if userid is None:
        return None
    else:
        return userid[0]

# Define a few command handlers. These usually take the two arguments bot and
# update. Error handlers also receive the raised TelegramError object in error.
def start(bot, update):
    """Add user to bill."""

    credit = checkstatus(update)
    if credit is None:
        chatid = update.message.chat.id
        chatname = update.message.chat.title
        userid = update.message.from_user.id
        username = update.message.from_user.name
        
        conn = sqlite3.connect(db)
        cursor = conn.cursor()
        
        sql = "insert into Bill values (?, ?, ?, ?, 0) "
        cursor.execute(sql,(userid,chatid,username,chatname))
        conn.commit()
        conn.close()
        createdstr = 'Hi, your account has been created'
        credit = 0
    else:
        createdstr = 'Hi, you already have account'
        
    update.message.reply_text(createdstr +', current balance is %s.%s' %(credit//100, credit%100))

    


def help(bot, update):
    """Send a message when the command /help is issued."""
    update.message.reply_text('\
This bot will help you to calculate joint purchases.\n\
Just add this bot to your group, then who whant participate \
should send /start to bot start logging your balance\n\n\
There are two scenarios how to use its functions: \
split /bill to all participants after after everything\
is /add -ed and purchasing small /buy -s \
by each member of group in rotation.\n\n\
Command /borrow allows to take into account \
individual expenses within the total account. \
In opposit, with command /pay you can note who \
paid for all and to whom everyone should /payto. \n\n\
You can easily change group size with commands \
/start /exclude and no one will be left out. \n\n\
Instead of sums can be used simple evaluations\n\n\
to start counting from zero use command /clear \n\n\
you can also send command instead of another \
writing his login after comand')

def add(bot, update, args):
    """add debt to all credits."""

    if len(args)<1:
        update.message.reply_text('sum must be written')
        return
    if len(idlist(update.message.chat.id))<2:
        update.message.reply_text('too few users, someone else should /start logging')
        return
    try:
        amount = round(eval(args[0])*100)
    except:
        update.message.reply_text('must be number')
        return
    if amount < 0:
        update.message.reply_text('must be positive')
    else:
        chatid = update.message.chat.id
        n = len(idlist(chatid))
        piece = amount // n
        inccredit(-piece, chatid)
        
        update.message.reply_text('%s.%s divided into %s, %s.%s each' % (amount//100, amount % 100, n, piece//100, piece % 100))

def buy(bot, update, args):
    """add and pay at once."""
    if len(args)<1:
        update.message.reply_text('sum must be written')
        return
    if not str.isdigit(args[0][0]):
        userid = finduser(update, args[0])
        if userid is None:
            if len(args)>1:
                update.message.reply_text('There is no such account')
            else:
                update.message.reply_text('must be number')
            return

        if len(args)>1:
            args[0] = args[1]
        else:
            update.message.reply_text('must be number')
            return
    else:
        credit = checkstatus(update)
        if credit is None:
            return
        userid = update.message.from_user.id
        
    if len(idlist(update.message.chat.id))<2:
        update.message.reply_text('too few users, someone else should /start logging')
        return
    try:
        amount = round(eval(args[0])*100)
    except:
        update.message.reply_text('must be number')
        return
    if amount < 0:
        update.message.reply_text('must be positive')
    else:
        chatid = update.message.chat.id
        
        ids = idlist(chatid)
        n = len(ids)
        piece = amount // n
        ids.remove(userid)
        inccredit(-piece, chatid, ids)
        inccredit(amount-piece, chatid, userid)
        update.message.reply_text('%s.%s divided into %s, %s.%s each' % (amount//100, amount % 100, n, piece//100, piece % 100))

        
def pay(bot, update, args):
    """add sum to bill."""
    if len(args)<1:
        update.message.reply_text('sum must be written')
        return
    if not str.isdigit(args[0][0]):
        userid = finduser(update, args[0])
        if userid is None:
            if len(args)>1:
                update.message.reply_text('There is no such account')
            else:
                update.message.reply_text('must be number')
            return

        if len(args)>1:
            args[0] = args[1]
        else:
            update.message.reply_text('must be number')
            return
    else:
        credit = checkstatus(update)
        if credit is None:
            return
        userid = update.message.from_user.id
        
    try:
        amount = round(eval(args[0])*100)
    except:
        update.message.reply_text('must be number')
        return
    if amount < 0:
        update.message.reply_text('must be positive, please use /borrow instead')
    else:
        chatid = update.message.chat.id
        inccredit(amount, chatid, userid)
        update.message.reply_text('%s.%s paid'% (amount//100, amount%100))

def payto(bot, update, args):
    """add sum to another's credit."""
    if len(args)<2:
        update.message.reply_text('login and sum must be written')
        return
    if not str.isdigit(args[1][0]):
        userid2 = finduser(update, args[1])
        if userid2 is None:
            if len(args)>2:
                update.message.reply_text('There is no such account')
            else:
                update.message.reply_text('must be number')
            return

        if len(args)>2:
            args[1] = args[2]
            if not str.isdigit(args[0][0]):
                userid1 = finduser(update, args[0])
                if userid1 is None:
                    update.message.reply_text('There is no such account')
                    return
            else:
                update.message.reply_text('There is no such account')
                return
        else:
            update.message.reply_text('must be number')
            return
    elif not str.isdigit(args[0][0]):
        userid2 = finduser(update, args[0])
        if userid2 is None:
            if len(args)>1:
                update.message.reply_text('There is no such account')
            else:
                update.message.reply_text('must be number')
            return
        userid1 = update.message.from_user.id
    else:
        update.message.reply_text('There is no such account')
    
        
    try:
        amount = round(eval(args[1])*100)
    except:
        update.message.reply_text('must be number')
        return
    if amount < 0:
        update.message.reply_text('must be positive, please change order of users instead')
    else:
        chatid = update.message.chat.id
        inccredit(amount, chatid, userid1)
        inccredit(-amount, chatid, userid2)
        update.message.reply_text('%s.%s is paid to'% (amount//100, amount%100))

def borrow(bot, update, args):
    """deducts sum to bill."""
    if len(args)<1:
        update.message.reply_text('sum must be written')
        return
    if not str.isdigit(args[0][0]):
        userid = finduser(update, args[0])
        if userid is None:
            if len(args)>1:
                update.message.reply_text('There is no such account')
            else:
                update.message.reply_text('must be number')
            return

        if len(args)>1:
            args[0] = args[1]
        else:
            update.message.reply_text('must be number')
            return
    else:
        credit = checkstatus(update)
        if credit is None:
            return
        userid = update.message.from_user.id
        
    try:
        amount = round(eval(args[0])*100)
    except:
        update.message.reply_text('must be number')
        return
    if amount < 0:
        update.message.reply_text('must be positive, please use /pay instead')
    else:
        chatid = update.message.chat.id
        inccredit(-amount, chatid, userid)
        update.message.reply_text('%s.%s borrowed'% (amount//100, amount%100))
        
def bill(bot, update):
    """show list of credits."""
    conn = sqlite3.connect(db)
    cursor = conn.cursor()
    
    sql = "SELECT username, credit FROM Bill WHERE chat_id = ?"
    cursor.execute(sql, (update.message.chat.id,)) 

    balance = 0
    output = ''
    for item in cursor.fetchall():
        credit = int(item[1])
        balance = balance + credit
        if credit < 0:
            output = output + '%s debt %s.%s\n' % (item[0], -credit//100, -credit%100)
        else:
            output = output + '%s excess %s.%s\n' % (item[0], credit//100, credit%100)
    output = output + 'balance %s%s.%s' %('-' if balance<0 else '' ,abs(balance)//100, abs(balance)%100)
    update.message.reply_text(output)
    conn.close()


    
def exclude(bot, update, args):
    """delete from bill."""
    if len(args)>0:
        userid = finduser(update, args[0])
        
        if userid is None:
            update.message.reply_text('There is no such account')
            return
        credit = checkstatus(update,userid)

    else:
        credit = checkstatus(update)
        if credit is None:
            update.message.reply_text('There is nothing to delete')
            return
        userid = update.message.from_user.id


    chatid = update.message.chat.id
  
    conn = sqlite3.connect(db)
    cursor = conn.cursor()
        
    sql = "DELETE FROM Bill WHERE chat_id = ? AND user_id = ? "
    cursor.execute(sql,(chatid,userid))
    conn.commit()
        
    conn.close()
    update.message.reply_text('You have been successfully excluded, the balance was %s.%s' %(credit//100,credit%100))

def clear(bot, update, args):
    """sets all credits to zero."""
    conn = sqlite3.connect(db)
    cursor = conn.cursor()
    
    if len(args)>0:
        userid = finduser(update, args[0])
            
        if userid is None:
            update.message.reply_text('There is no such account')
            return
        sql = "UPDATE Bill SET credit = 0 WHERE chat_id = ? AND user_id = ?"
        cursor.execute(sql, (update.message.chat.id, userid))
        update.message.reply_text('cleared up')

    else:
        sql = "UPDATE Bill SET credit = 0 WHERE chat_id = ?"
        cursor.execute(sql, (update.message.chat.id,))
        update.message.reply_text('all cleared up')


    conn.commit()
    conn.close()
    

def error(bot, update, error):
    """Log Errors caused by Updates."""
    logger.warning('Update "%s" caused error "%s"', update, error)


def main():
    """Start the bot."""
    # Create the EventHandler and pass it your bot's token.
    updater = Updater(TOKEN,request_kwargs=REQUEST_KWARGS)

    # Get the dispatcher to register handlers
    dp = updater.dispatcher

    # on different commands - answer in Telegram
    dp.add_handler(CommandHandler("start", start))
    dp.add_handler(CommandHandler("help", help))
    dp.add_handler(CommandHandler("add", add, pass_args=True))
    dp.add_handler(CommandHandler("buy", buy, pass_args=True))
    dp.add_handler(CommandHandler("pay", pay, pass_args=True))
    dp.add_handler(CommandHandler("payto", payto, pass_args=True))
    dp.add_handler(CommandHandler("borrow", borrow, pass_args=True))
    dp.add_handler(CommandHandler("bill", bill))
    dp.add_handler(CommandHandler("exclude", exclude, pass_args=True))
    dp.add_handler(CommandHandler("clear", clear, pass_args=True))

    # log all errors
    dp.add_error_handler(error)

    # Start the Bot
    updater.start_polling()

    # Run the bot until you press Ctrl-C or the process receives SIGINT,
    # SIGTERM or SIGABRT. This should be used most of the time, since
    # start_polling() is non-blocking and will stop the bot gracefully.
    updater.idle()


if __name__ == '__main__':
    main()
