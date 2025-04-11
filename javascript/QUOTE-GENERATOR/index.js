function generateQuote(){
    let myquote = document.getElementById("quote");
    let random =[
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "The way to get started is to quit talking and begin doing.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "If you can dream it, you can achieve it.",
        "Believe you can and you're halfway there.","Believe in yourself and all that you are.",
         "The only way to do great work is to love what you do.", 
        "Don’t watch the clock; do what it does. Keep going.", 
        "Success is not final, failure is not fatal: It is the courage to continue that counts.", "Dream big and dare to fail.", 
        "The harder you work for something, the greater you’ll feel when you achieve it.", "Your limitation—it’s only your imagination.", 
        "Push yourself, because no one else is going to do it for you.", "Great things never come from comfort zones.", 
        "Dream it. Wish it. Do it.", "Do something today that your future self will thank you for.", 
        "Success doesn’t just find you. You have to go out and get it.",
         "Little things make big days.", "Don’t stop when you’re tired. Stop when you’re done.", "The key to success is to focus on goals, not obstacles.", 
         "Wake up with determination. Go to bed with satisfaction.", 
        "Work hard in silence. Let your success be the noise.", "Don’t limit your challenges. Challenge your limits.", "It always seems impossible until it’s done.", 
        "You don’t have to be great to start, but you have to start to be great."

    ]
    
    let hello=random [ Math.floor(Math.random()*random.length)];
    myquote.textContent = hello;
    
}