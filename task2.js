const fs = require('fs');


async function createFile(filename, content) {
  try {
    await fs.promises.writeFile(filename, content);
    console.log(`File "${filename}" created successfully.`);
  } catch (error) {
    console.error(`An error occurred while creating "${filename}":`, error);
  }
}


function displayMessage(message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(message);
      resolve(); 
    }, 2000); 
  });
}


async function main() {
  await displayMessage("Hello, this is a promise!");

  const filename = "message.txt";
  const content = "This is the content of the file.";

  await createFile(filename, content);
}

main();
