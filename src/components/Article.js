import React from 'react'

function emojiList(minutes){
    const interval = minutes < 30 ? 5 : 10;
    const emoji = minutes < 30 ? "☕️" : "🍱";

    let displayedEmojis = "";
    for( let i = 0; i < minutes; i += interval ){
        displayedEmojis += emoji;
    }

    return displayedEmojis;
}

function Article({ title, date = "January 1, 1970", preview, minutes }) {
    const displayedEmojis = emojiList(minutes);
  
    return (
      <article>
        <h3>{title}</h3>
        <small>
          {date} • {displayedEmojis} {minutes} min read
        </small>
        <p>{preview}</p>
      </article>
    );
  }
  

export default Article;