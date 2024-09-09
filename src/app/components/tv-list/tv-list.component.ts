import { DatePipe, DecimalPipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-tv-list',
  standalone: true,
  imports: [NgClass,NgStyle,DatePipe,UpperCasePipe,DecimalPipe,MatPaginatorModule],
  
  templateUrl: './tv-list.component.html',
  styleUrl: './tv-list.component.css',
})
export class TvListComponent {
  tvList = [
    {
      adult: false,
      backdrop_path: '/h0y3OzHzG4yNvn8u3Za6ByH8lrQ.jpg',
      genre_ids: [18, 10766],
      id: 45789,
      origin_country: ['DE'],
      original_language: 'de',
      original_name: 'Sturm der Liebe',
      overview:
        'These are the stories of relationships taking place in the fictional five-star hotel Fürstenhof, located in Feldkirchen-Westerham near Rosenheim with the plot revolving around members of the family room area, the hotel owners, and employees.',
      popularity: 5290.2,
      poster_path: '/9oZjOh3Va3FsiLGouhSogFsBX9G.jpg',
      first_air_date: '2005-09-26',
      name: 'Sturm der Liebe',
      vote_average: 5.983,
      vote_count: 29,
    },
    {
      adult: false,
      backdrop_path: '/ottT2Yt0OfHiHp3PHJTLNVV8JPE.jpg',
      genre_ids: [18, 10766],
      id: 13945,
      origin_country: ['DE'],
      original_language: 'de',
      original_name: 'Gute Zeiten, schlechte Zeiten',
      overview:
        "Gute Zeiten, schlechte Zeiten is a long-running German television soap opera, first broadcast on RTL in 1992. The programme concerns the lives of a fictional neighborhood in Germany's capital city Berlin. Over the years the soap opera tends to have an overhaul of young people in their late teens and early twenties; targeting a young viewership.",
      popularity: 5101.509,
      poster_path: '/fNHBzjxsydcAssxXqb5IV2obDdU.jpg',
      first_air_date: '1992-05-11',
      name: 'Gute Zeiten, schlechte Zeiten',
      vote_average: 5.833,
      vote_count: 30,
    },
    {
      adult: false,
      backdrop_path: '/rVGhUYTdicAohn2mPbgNXuO5g0e.jpg',
      genre_ids: [18, 35, 10766],
      id: 308,
      origin_country: ['PT'],
      original_language: 'pt',
      original_name: 'Morangos com Açúcar',
      overview:
        'Morangos com Açúcar was a Portuguese Teen drama. It was broadcast daily on the Portuguese TV station TVI between 30 August 2003 to 15 September 2012. It has also been broadcast in Angola, Syria, Brazil and Romania.',
      popularity: 5078.093,
      poster_path: '/uyzx0JkWOOF3Mfcq4uiuIr2Ykju.jpg',
      first_air_date: '2003-08-30',
      name: 'Strawberries with Sugar',
      vote_average: 5.385,
      vote_count: 13,
    },
    {
      adult: false,
      backdrop_path: '/dasgPx3OgkxHSQyncKlApfZkpi2.jpg',
      genre_ids: [10767, 10763],
      id: 224,
      origin_country: ['GB'],
      original_language: 'en',
      original_name: 'Match of the Day',
      overview:
        'BBC\'s football highlights and analysis.\n\n"The longest-running football television programme in the world" as recognised by Guinness World Records in 2015.',
      popularity: 4967.074,
      poster_path: '/aA25JrHXj8ZPTJYj2iSIueyb34C.jpg',
      first_air_date: '1964-08-22',
      name: 'Match of the Day',
      vote_average: 7.375,
      vote_count: 40,
    },
    {
      adult: false,
      backdrop_path: '/9daf0KXr3xUkMt2NCI0ZhDIZJEa.jpg',
      genre_ids: [10766],
      id: 12415,
      origin_country: ['ZA'],
      original_language: 'af',
      original_name: 'Egoli: Place of Gold',
      overview:
        'A South African television soap opera created by Franz Marx which revolves around the daily ups, downs, trials and tribulations of a handful of families in and around Johannesburg (which is often referred to as eGoli - the City of Gold)',
      popularity: 4911.462,
      poster_path: '/5X0SWyNJ5IjN9YSXlbHBOVMzh1G.jpg',
      first_air_date: '1992-04-06',
      name: 'Egoli: Place of Gold',
      vote_average: 6.75,
      vote_count: 4,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [18, 10751],
      id: 50821,
      origin_country: ['HU'],
      original_language: 'hu',
      original_name: 'Barátok közt',
      overview: '',
      popularity: 4742.554,
      poster_path: '/mT6VFzwGPddwGjWGxzNOy4JVL8.jpg',
      first_air_date: '1998-10-26',
      name: 'Barátok közt',
      vote_average: 4.6,
      vote_count: 8,
    },
    {
      adult: false,
      backdrop_path: '/3SWOj8ydFrxiuZdLg63fDAt4jYR.jpg',
      genre_ids: [10764],
      id: 11366,
      origin_country: ['GB'],
      original_language: 'en',
      original_name: 'Big Brother',
      overview:
        'A British reality television game show in which a number of contestants live in an isolated house for several weeks, trying to avoid being evicted by the public with the aim of winning a large cash prize at the end of the run.',
      popularity: 3787.237,
      poster_path: '/p7lsmCU5ZqaMGKZAuZMkFc02X8o.jpg',
      first_air_date: '2000-07-18',
      name: 'Big Brother',
      vote_average: 3.7,
      vote_count: 53,
    },
    {
      adult: false,
      backdrop_path: '/92cc2hINaW72HTA0RqQaqPUbl4g.jpg',
      genre_ids: [16, 35, 10767],
      id: 46825,
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Rooster Teeth Animated Adventures',
      overview:
        'The animated shenanigans of the Rooster Teeth staff. Audio taken from the Rooster Teeth Podcast.',
      popularity: 3915.577,
      poster_path: '/xrcOsjmuBcmf1YhqyQ6qrGCcsvE.jpg',
      first_air_date: '2011-09-28',
      name: 'Rooster Teeth Animated Adventures',
      vote_average: 8.6,
      vote_count: 5,
    },
    {
      adult: false,
      backdrop_path: '/dfX2UaHVE5c7kLBFbgmEZJuy4Ev.jpg',
      genre_ids: [10767, 35],
      id: 61818,
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Late Night with Seth Meyers',
      overview:
        'Seth Meyers, who is "Saturday Night Live’s" longest serving anchor on the show’s wildly popular "Weekend Update," takes over as host of NBC’s "Late Night" — home to A-list celebrity guests, memorable comedy and the best in musical talent. As the Emmy Award-winning head writer for "SNL," Meyers has established a reputation for sharp wit and perfectly timed comedy, and has gained fame for his spot-on jokes and satire. Meyers takes his departure from "SNL" to his new post at "Late Night," as Jimmy Fallon moves to "The Tonight Show".',
      popularity: 4646.302,
      poster_path: '/g6MrJxNaHYGYU7Sxo72e5B8gKOV.jpg',
      first_air_date: '2014-02-25',
      name: 'Late Night with Seth Meyers',
      vote_average: 5.477,
      vote_count: 87,
    },
    {
      adult: false,
      backdrop_path: '/uGbBFoxXNscnH9UZuF8v0ODrrve.jpg',
      genre_ids: [10766],
      id: 14509,
      origin_country: ['DE'],
      original_language: 'de',
      original_name: 'In aller Freundschaft',
      overview:
        'German soap opera about the staff of the fictional hospital "Sachsenklinik" in the city of Leipzig.',
      popularity: 2998.464,
      poster_path: '/f8ZHSXNs5jyjMz3qg7mB2fqnTjP.jpg',
      first_air_date: '1998-10-26',
      name: 'In aller Freundschaft',
      vote_average: 7,
      vote_count: 5,
    },
    {
      adult: false,
      backdrop_path: '/nlLKuyFz6lI0KyiY1V1AE2GwGX9.jpg',
      genre_ids: [35, 18, 10766],
      id: 32209,
      origin_country: ['PE'],
      original_language: 'es',
      original_name: 'Al Fondo Hay Sitio',
      overview:
        "Al fondo hay sitio is a Peruvian TV series created in 2008-2009 by Efraín Aguilar. It deals with the problems of social differences and economic status. It's one of the most popular shows in Peru and is now being shown in Ecuador, Bolivia, Paraguay and Uruguay.",
      popularity: 5450.913,
      poster_path: '/g7cuCCkvoBuSwemTHYz3k0hvvmz.jpg',
      first_air_date: '2009-03-30',
      name: 'Al Fondo Hay Sitio',
      vote_average: 7.86,
      vote_count: 210,
    },
    {
      adult: false,
      backdrop_path: '/mzgxjQFLYPk73bCYeGFWOAmKqV0.jpg',
      genre_ids: [10766],
      id: 11890,
      origin_country: ['NL'],
      original_language: 'nl',
      original_name: 'Goede Tijden, Slechte Tijden',
      overview:
        'Goede tijden, slechte tijden, also known as GTST, is the longest-running Dutch soap opera,  revolving around the lives of the families Alberts, Sanders, De Jong, Van Houten and Bouwhuis. It all takes place in the fictional town of Meerdijk.',
      popularity: 5357.554,
      poster_path: '/eQj2e8Nok6LCDO1dJXqNUkVcNby.jpg',
      first_air_date: '1990-10-01',
      name: 'Goede Tijden, Slechte Tijden',
      vote_average: 4.4,
      vote_count: 14,
    },
    {
      adult: false,
      backdrop_path: '/nG2im8JKKNB6dXg9ZmVTuiYqFJI.jpg',
      genre_ids: [10766, 18],
      id: 14610,
      origin_country: ['FI'],
      original_language: 'fi',
      original_name: 'Salatut elämät',
      overview:
        "Salatut elämät (Secret Lives) is a Finnish television soap opera that premiered on MTV3 on 25 January 1999. The series' storylines follow the daily lives of several families who live in the same apartment block in Helsinki.",
      popularity: 3964.84,
      poster_path: '/ugYAGyxwajuplDUUYT8Bzbj8eNR.jpg',
      first_air_date: '1999-01-25',
      name: 'Secret Lives',
      vote_average: 4.8,
      vote_count: 15,
    },
    {
      adult: false,
      backdrop_path: '/sHG0x2Vq0tuvkgFRLUDq8vVJreU.jpg',
      genre_ids: [10766],
      id: 236443,
      origin_country: ['ZA'],
      original_language: 'af',
      original_name: 'Getroud met Rugby: Die Sepie',
      overview:
        'Getroud met Rugby: Die Sepie is a South African soap opera based on the feature film and later drama series Getroud met Rugby by Deon Opperman, which is set amongst a rugby-playing community.',
      popularity: 3895.044,
      poster_path: '/sBp8JBN38AanXyuX4yT3SDuoieY.jpg',
      first_air_date: '2016-04-04',
      name: 'Getroud met Rugby: Die Sepie',
      vote_average: 6,
      vote_count: 1,
    },
    {
      adult: false,
      backdrop_path: '/rj3jBAZwPiOgkwAy1205MAgLahj.jpg',
      genre_ids: [10766],
      id: 81329,
      origin_country: ['FR'],
      original_language: 'fr',
      original_name: 'Un si grand soleil',
      overview:
        'Claire is surprised when she gets arrested for the murder of her childhood friend after she returns to Montpellier.',
      popularity: 5294.922,
      poster_path: '/t6jVlbPMtZOJoAOfeoR4yQmnjXM.jpg',
      first_air_date: '2018-08-27',
      name: 'Chronicles of the Sun',
      vote_average: 7.1,
      vote_count: 78,
    },
    {
      adult: false,
      backdrop_path: '/lqDlYLNA0RdMXDiz70lU8Ib1nwW.jpg',
      genre_ids: [18, 35, 80],
      id: 8590,
      origin_country: ['FR'],
      original_language: 'fr',
      original_name: 'Plus belle la vie',
      overview:
        'The daily lives of the inhabitants of "le Mistral", an imaginary neighbourhood in the Mediterranean port city of Marseille, where wealthy families cross paths with the less than rich.',
      popularity: 3767.792,
      poster_path: '/jmU8HlTDn87xmRqXagcL2swDr8I.jpg',
      first_air_date: '2004-08-30',
      name: 'Plus belle la vie',
      vote_average: 4.404,
      vote_count: 26,
    },
    {
      adult: false,
      backdrop_path: '/1gZrOa2E9DOohEvSLLBJqus2zGu.jpg',
      genre_ids: [80, 18, 9648],
      id: 15226,
      origin_country: ['IN'],
      original_language: 'hi',
      original_name: 'C.I.D.',
      overview:
        'ACP Pradyuman, Daya and Abhijeet are an elite trio of officers who work for the CID. They seek the help of professional forensic expert Dr Salunkhe and solve various criminal cases.',
      popularity: 3683.287,
      poster_path: '/zNCpkoHN3LSK9yi1C2M0Z1rOv6J.jpg',
      first_air_date: '1998-01-21',
      name: 'C.I.D.',
      vote_average: 6,
      vote_count: 19,
    },
    {
      adult: false,
      backdrop_path: '/8qlKzvR68dH0ZaJFG9XBEctvvUo.jpg',
      genre_ids: [35, 18],
      id: 63935,
      origin_country: ['FR'],
      original_language: 'fr',
      original_name: "Les Mystères de l'amour",
      overview: '',
      popularity: 2316.724,
      poster_path: '/mtUhIHbhw0GCacVnPam8p4vwejB.jpg',
      first_air_date: '2011-02-12',
      name: "Les Mystères de l'amour",
      vote_average: 6.3,
      vote_count: 10,
    },
    {
      adult: false,
      backdrop_path: '/pScata79RTzkw5csapgmtN7pqEM.jpg',
      genre_ids: [10764],
      id: 256059,
      origin_country: ['GB'],
      original_language: 'en',
      original_name: 'Ready Steady Cook',
      overview:
        'Talented chefs battle it out against the clock, creating delicious dishes in 20 minutes',
      popularity: 3568.1,
      poster_path: '/3NotbtMdZouIVywd5VcGezBEcNC.jpg',
      first_air_date: '1994-10-24',
      name: 'Ready Steady Cook',
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: '/7jEnft2CLNbILWAiBRIBrXNN7Qh.jpg',
      genre_ids: [10767, 35],
      id: 498,
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Late Show with David Letterman',
      overview:
        "Late Show with David Letterman is an American late-night talk show hosted by David Letterman on CBS. The show debuted on August 30, 1993, and is produced by Letterman's production company, Worldwide Pants Incorporated and CBS Television Studios. The show's music director and band-leader of the house band, the CBS Orchestra, is Paul Shaffer. The head writer is Matt Roberts and the announcer is Alan Kalter. Of the major U.S. late-night programs, Late Show ranks second in cumulative average viewers over time and third in number of episodes over time. The show leads other late night shows in ad revenue with $271 million in 2009.\n\nIn most U.S. markets the show airs at 11:35 p.m. Eastern/Pacific time, but is recorded Monday through Wednesday at 4:30 p.m., and Thursdays at 3:30 p.m and 6:00 p.m. The second Thursday episode usually airs on Friday of that week.\n\nIn 2002, Late Show with David Letterman was ranked No. 7 on TV Guide's 50 Greatest TV Shows of All Time. CBS has a contract with Worldwide Pants to continue the show through 2014; by then, Letterman will surpass Johnny Carson as the longest tenured late-night talk show host.",
      popularity: 4805.267,
      poster_path: '/7dwM8AKyQfauguoQbI1MIlHinLM.jpg',
      first_air_date: '1993-08-30',
      name: 'Late Show with David Letterman',
      vote_average: 6.299,
      vote_count: 134,
    },
  ];
  constructor(){
    
  }
}
