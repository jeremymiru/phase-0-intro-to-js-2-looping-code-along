function writeCards(names) {
    const messages = [];
    for (const name of names) {
      messages.push(`Thank you, ${name}, for the wonderful surprise gift!`);
    }
    return messages;
  }

function countDown(number) {

    while (number >= 0) {
      console.log(number);
      number--;
    }
  }

  countDown(10);