const { Telegraf } = require('telegraf');
const translate = require('translation-google');
require("dotenv").config();

const bot = new Telegraf(process.env.TOKEN);
// let count = 0;

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
// console.log(count);
