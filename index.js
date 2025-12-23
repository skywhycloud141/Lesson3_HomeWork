const pinCodes =["1234","5678","1111","9999"]
const myPin = "1234"
for (codes of pinCodes){
    if (codes===myPin){
        console.log("Верный Пин Код,Welcome")
        break
    }
    else{
        console.log("Неверный пин...")
        continue
    }
}
