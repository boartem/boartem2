$(document).ready(function() {
//массив страна-города
var all_country = {'Украина':['Днепр', 'Киев', 'Львов'],'Россия':['Екатеринбург', 'Нижний Тагил', 'Москва'],'США':['Атланта','Остин','Нью-Йорк']};
//вывод в список стран
for (var country in all_country)
$("#country").append("<option>"+country+"</option>");
//вывод в список городов
$("#country").change(function(){
$("#city").empty();
var select = $("#country option:selected").text();
for (var i = 0; i <all_country[select].length;i++)
$("#city").append("<option>"+all_country[select][i] +"</option>");
});
$("#country").change();
//запрет ввода символов в поле "Возраст"
$("#age").keypress(function(e){
var symbol = (e.which) ? e.which : e.keyCode;
if (symbol != 8 && symbol !=37 && symbol !=46 && symbol !=39 && (symbol < 48 || symbol > 57)) 
return false;
});
//проверка антибот
var antibot = {"2+2": 4, "2-2": 0, "2x3":6, "8-7":1, "5+0":5};
var mass = [];
for (var i in antibot) mass.push(i);
out = mass[Math.floor(Math.random()*(mass.length))];
$("span").append(out);
answer = antibot[out];
//проверка заполнения полей формы
$("#ok").click(function(){
var radio_check = false;
var checkbox_check = false;
var str = "Вы не заполнили поле(поля): "; 
//проверка текстовых полей
$(":text, :password, #aboutMe").each(function()
{
if($(this).val() == "") str += '"'+$(this).attr("name")+ '" ';
});
//проверка radio-элементов
$(".radio").each(function()
{
if($(this).attr('checked') == true) radio_check = true; 
});
//проверка checkbox-элементов
$(".check").each(function()
{
if($(this).attr('checked') == true) checkbox_check = true;   
});
if (radio_check != true) str += ' "Пол" ';
if (checkbox_check != true) str += '"Ваши увлечения" ';
if (str != "Вы не заполнили поле(поля): ")
{
alert (str);
return false;
}
else //проверка правильности ввода
{
//проверка возраста
var age = $("#age").val();
if (age < 18 || age > 120)
{
alert("Возрастной диапазон 18-120");
return false;
}
//проверка поля антибот
var user_answer = $("#antibot").val();
if (user_answer != answer)
{
alert("Вы НЕ прошли систему Антибот");
return false;
}
alert("Вы прошли регистрацию");
}
});
});