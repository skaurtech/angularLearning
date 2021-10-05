import { Component, OnInit } from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  contentList: Content[];
  constructor() { }

  searchContent(search:String):void{
    let exist = this.contentList.find(content => content.title.toLowerCase() == search.toLowerCase());
    alert(exist ? `${search} exist!` : `${search} does not exist!`);
  }
  ngOnInit():void {

  this.contentList = [
    {
      id: 1,
      author: 'Stan lee',
      title: 'The Avengers',
      body: 'Earth\'s Mightiest Heroes stand as the planet\'s first line of defense against the most powerful threats in the universe. The Avengers began as a group of extraordinary individuals who were assembled to defeat Loki and his Chitauri army in New York City.',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
      tags: ['Action', 'Adventure', 'Superhero'],
      type: 'action'
    },
    {
      id: 2,
      author: 'Gary Scott Thompson',
      title: 'Fast and Furious',
      body: 'Fast & Furious is a media franchise centered on a series of action films that are largely concerned with illegal street racing, heists, spies and betrayal.',
      imgUrl: 'https://d1w8cc2yygc27j.cloudfront.net/4443047957853114329/-6781388769580275609.jpg',
      tags: ['Action', 'Adventure', 'Thriller'],
      type: 'adventure'
    },
    {
      id: 3,
      author: 'Alan Dean Foster',
      title: 'Star wars: the Rise of Skywalker',
      body: 'Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon.',
      imgUrl: 'data:image/png;base64,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',
      tags: ['Science fiction', 'space opera', 'Epic'],
      type: 'action'
    },
    {
      id: 4,
      author: 'John Norville',
      title: 'Jungle Cruise',
      body: 'Based on Disneyland\'s theme park ride where a small riverboat takes a group of travelers through a jungle filled with dangerous animals and reptiles but with a supernatural element.',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BNDE1MGRlNTQtZjc4ZC00MTI0LWEwY2MtODk1YTM2NmFmYTNmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg',
      tags: ['Action', 'Comedy', 'Fantasy'],
      type: 'action'
    },
    {
      //no image
      id: 5,
      author: 'Charles Perrault',
      title: 'Cinderella',
      body: 'Cinderella, the beautiful and kind-hearted daughter, sees her world turn upside down when her beloved mother dies, and her pained father remarries another woman, the wicked Lady Tremaine, who has two equally cruel daughters, the jealous Anastasia and Drizella.',
      tags: ['Romance', 'Children\'s film'],
      type: 'adventure'
    },
    {
      id: 6,
      author: 'Steve Ditko',
      title: 'Spider-man',
      body: 'Spider-Man has spider-like abilities including superhuman strength and the ability to cling to most surfaces. He is also extremely agile and has amazing reflexes. Spider-Man also has a “spider sense,” that warns him of impending danger. Spider-Man has supplemented his powers with technology.',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Spider-Man_PS4_cover.jpg/220px-Spider-Man_PS4_cover.jpg',
      tags: ['Action', 'Superhero'],
      type: 'action'
    },
  ];
}

}
