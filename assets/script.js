var topics = ["HTML" , "CSS", "Git","JavaScript"];
var randomTopics = topics[Math.floor(Math.random() * topics.length)];

function selectTopic(){
    if (randomTopics === "HTML") {
    console.log("Let's study HTML!");
    } else if (randomTopics === 'CSS') {
    console.log("Let's study CSS!");
    } else if (randomTopics === 'Git') {
    console.log("Let's study Git!");
    } else if (randomTopics === 'JavaScript') {
    console.log("Let's study JavaScript!");
    } else {
    console.log('Please try again!');
    }
}

function listTopics() {
    for (var x = 0; x < topics.length; x++ ){
        console.log(topics[x]);
    }
}
console.log("--- Here is the list of the topics we studied on prework ---");
listTopics();
console.log("--- Random topic for you to study! ---");
selectTopic();