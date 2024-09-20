const { Telegraf } = require('telegraf');
const translate = require('translation-google');
require("dotenv").config();

const bot = new Telegraf(process.env.TOKEN);

bot.start((ctx) => {
   ctx.reply(`Salom ${ctx.from.first_name}. Men Ingliz tilidan O'zbek tiliga tarjima qilib beruvchi botman. So'zni kiriting!`);
   console.log(ctx.from.first_name);
});

bot.on('text', async (ctx) => {
   const message = ctx.message.text;
   console.log(message);
   
   try {
      const translation = await translate(message, { from: "en", to: "uz" });
      ctx.reply(translation.text);  
   } catch (error) {
    //   console.error(error);
      ctx.reply('Xatolik yuz berdi tarjima qilishda.');
   }
});
bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
