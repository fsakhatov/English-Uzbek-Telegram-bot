const { Telegraf } = require('telegraf');
const translate = require('translation-google');

const bot = new Telegraf("7013130426:AAHsGuqyL2_AMUIs_Ija0Oa5awv-xfTV1Cg");
let count = 0;

bot.start((ctx) => {
   ctx.reply(`Salom ${ctx.from.first_name}. Men Ingliz tilidan O'zbek tiliga tarjima qilib beruvchi botman.`);
   if(ctx.from.id) count++;
});

bot.on('text', async (ctx) => {
   const message = ctx.message.text;
   console.log(message);
   
   try {
      const translation = await translate(message, { from: "en", to: "uz" });
      ctx.reply(translation.text);  
   } catch (error) {
      console.error(error);
      ctx.reply('Xatolik yuz berdi tarjima qilishda.');
   }
});
bot.launch();
console.log(count);
