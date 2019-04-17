export function getDirItems(folderPath :string, filterTerm: string) : string
{
    //requiring path and fs modules
    const path = require('path');
    const fs = require('fs');

    //joining path of directory 
    const directoryPath = path.join(folderPath);
    var incrementValue = 1;


    var files2 = fs.readdirSync(directoryPath);
    files2.forEach((file: string) => {
        console.log(file);
    });

    // //passing directoryPath and callback function
    // fs.readdir(directoryPath, function (err: string, files: string[]) {
    //     //handling error
    //     if (err) {
    //         return console.log('Unable to scan directory: ' + err);
    //     } 
    //     //listing all files using forEach
    //     files.forEach(function (file: string) {
    //         // Do whatever you want to do with the file
    //         console.log(file);
    //     })

    //     console.log("Filtering with term: " + filterTerm);
    //     files.forEach(function (file: string) {
    //         // Do whatever you want to do with the file
    //         if (file.match(filterTerm))
    //         {
    //             var numberString = file.replace(filterTerm, '');
    //             var number = parseInt(numberString);
    //             console.log(number);
    //             if (number >= incrementValue)
    //             {
    //                 incrementValue = number + 1;
    //             }
    //         }
    //     }
    //     );
    // });

    var newName  = filterTerm + incrementValue;
    console.log("NewName is: " + newName);
    return newName;
}