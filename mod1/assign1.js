const fs=require('fs');
var fname = process.argv[2];
var fexist=fs.existsSync(fname);
if(fexist == false)
{

fs.writeFile(fname,'You are Awesome!',function(err)
{
   if(err)
    {
        console.log("Error");
    }
    else
    {
        console.log("created a new file");
    }
      
})}
    else
    {
        console.log("File exists enter a new file name");
    }