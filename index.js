random=()=>
{
	return(Math.floor((Math.random()*99)+1));
}
$('.card-cell').on('click',(e)=>
{
	if(e.target.className=="card-cell done")
	{
		$(e.target).css("background-color","rgba(255,255,7,0.9)")
	}
})
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
	}
})
done=()=>
{
	var selected=s();
	$('.no').text(selected);
	var cells=$('.card-cell')
	$(".card-cell").attr("class","card-cell")
	cells.map(c=>
	{

		if($(cells[c]).text()==selected)
		{
			$(cells[c]).attr("class",'card-cell done');
			
		}
	})
	var cardrow=$('.card-row');
	cardrow.map((ind,c)=>
	{
		var cells=$(c).children();
		var alldone=true;
		for(var i=0;i<cells.length;i++)
		{
			if($(cells[i]).text().trim()!="" && $(cells[i]).css("background")!="rgba(255, 255, 7, 0.9) none repeat scroll 0% 0% / auto padding-box border-box" )
			{
				alldone=false;
				break;
			}
		}
		if(alldone)
		{
			$(c).children().css("background","transparent");
			$(c).css("background","green")
		}
	})
	var row1=$('.card:nth-child(1)').children().filter((n,m)=>
{
	var color=$(m).css("background");
	return color=="rgb(0, 128, 0) none repeat scroll 0% 0% / auto padding-box border-box";
})
console.log("ok",row1.length)
var row2=$('.card:nth-child(2)').children().filter((n,m)=>
{
	var color=$(m).css("background");
	return color=="rgb(0, 128, 0) none repeat scroll 0% 0% / auto padding-box border-box";
})
var row3=$('.card:nth-child(3)').children().filter((n,m)=>
{
	var color=$(m).css("background");
	return color=="rgb(0, 128, 0) none repeat scroll 0% 0% / auto padding-box border-box";
})
if(row1.length==3 || row2.length==3 || row3.length==3)
{
	$('.con').attr("class","confetti")
}
}

