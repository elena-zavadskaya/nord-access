import telebot
from telebot import types


bot = telebot.TeleBot('7887883202:AAFs9MB5EAiJUocNA9ZwudT---rNyamdFlw')


# Команда /start
@bot.message_handler(commands=['start'])
def main(message):
    # bot.send_message(message.chat.id, message) #вся информация об объектах чата
    # markup = types.InlineKeyboardMarkup() #создание кнопок

    bot.send_message(message.chat.id, f'Привет, {message.from_user.first_name}')


# Команда /help
@bot.message_handler(commands=['help'])
def help_command(message):
    help_text = (
        "Используйте команды из списка, чтобы взаимодействовать с ботом.\n"
        "Список доступных команд:\n"
        "/start - Приветствие и начало работы с ботом\n"
        "/help - Помощь\n\n"
    )
    # Создание кнопок
    markup = types.InlineKeyboardMarkup(row_width=2)  # Создаем разметку для кнопок (2 в ряд)
    btn_start = types.InlineKeyboardButton("Начать /start", callback_data='start')
    btn_help = types.InlineKeyboardButton("Помощь /help", callback_data='help')

    # Добавление кнопок в разметку
    markup.add(btn_start, btn_help)

    # Отправка сообщения с кнопками
    bot.send_message(message.chat.id, help_text, reply_markup=markup)


# Обработка нажатий на кнопки
@bot.callback_query_handler(func=lambda call: True)
def callback_handler(call):
    if call.data == 'start':
        bot.send_message(call.message.chat.id, "Вы нажали кнопку 'Начать /start'.")
    elif call.data == 'help':
        bot.send_message(call.message.chat.id, "Вы нажали кнопку 'Помощь /help'.")


bot.polling(none_stop=True)
