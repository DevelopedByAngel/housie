random=()=>
{
	return(Math.floor((Math.random()*99)+1));
}
numbers=[];
for (var i=1;i<100;i++)
{
	numbers.push(i);
}
var count=numbers.length;
var listindex, temp;
while(count>0)
{
	listindex=Math.floor(Math.random()*100);
	count--;
	temp=numbers[count];
	numbers[count]=numbers[listindex];
	numbers[listindex]=temp;
}
s=()=>
{
	return(numbers.pop());
}
card=(list)=>
{
	var i=(Math.floor(Math.random() * list.length))
	console.log("randmo"+i)
	return list[i];
}
card_rows=$('.card-row');
card_rows.map((index,c)=>
{
	var cells=$(c).children();
	var not=[];
	for(var i=0;i<5;i++)
	{
		var remove=card(cells);
		while(not.includes(remove))
		{
			remove=card(cells);
		}
		not.push(remove);
		$(remove).text(random());
		console.log(not);
	}
})
done=()=>
{
	var selected=s();
	console.log(selected);
	$('.no').text(selected);
	var cells=$('.card-cell')
	cells.map(c=>
	{

		if($(cells[c]).text()==selected)
		{
			$(cells[c]).attr("class",'card-cell done');
			
		}
	})
	console.log(cells.length)
	var cardrow=$('.card-row');
	allrow=true;
	cardrow.map((ind,c)=>
	{
		var cells=$(c).children();
		var alldone=true;
		for(var i=0;i<cells.length;i++)
		{
			console.log($(cells[i]).text().trim()=="");
			if($(cells[i]).text().trim()!="" && $(cells[i]).css("background")!="rgba(255, 255, 7, 0.9) none repeat scroll 0% 0% / auto padding-box border-box" )
			{
				console.log("no",ind)
				alldone=false;
				allrow=false;
				break;
			}
		}
		if(alldone)
		{
			$(c).children().css("background","transparent");
			$(c).css("background","green")
		}
	})
	if(allrow)
	{
		$('.con').attr('class',"confetti");
	}
}
