"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Books", [
      {
        title: "High School's Classic Literature",
        publicationDate: "2007",
        pages: "32",
        isbn: "89343246",
        author: "Ale",
        about:
          "who joins the Classic Literature Club with him. He is proud of his impressive memory, referring to himself as a human , and wears a perpetual grin. Although he always urges Oreki to participate more in life, it is revealed that he is also secret",
        epubFile:
          "https://res.cloudinary.com/anggafile/raw/upload/v1615090299/epub/white_nights_z50npi.epub",
        thumbnail:
          "https://res.cloudinary.com/anggafile/image/upload/v1614961377/images/200__dbimqy.jpg",
        createdAt: "2017-01-01",
        updatedAt: "2019-01-11",
      },
      {
        title: "The Canterville Ghost",
        publicationDate: "2012",
        pages: "32",
        isbn: "893404345776",
        author: "Made",
        about:
          "The fourth member of the Classic Literature Club; she joined after the other three. She and the boys attended the same middle school. She doesn't get along well with Hotaro though their relationship starts to improve after she befriends Eru. Mayaka has a ",
        epubFile:
          "https://res.cloudinary.com/anggafile/raw/upload/v1615090299/epub/white_nights_z50npi.epub",
        thumbnail:
          "https://res.cloudinary.com/anggafile/image/upload/v1614961378/images/3_u5nqrn.png",
        createdAt: "2017-01-01",
        updatedAt: "2019-01-11",
      },
      {
        title: "White Nights",
        publicationDate: "2017",
        pages: "32",
        isbn: "1233776",
        author: "George",
        about:
          "An unsung tragic hero of Kamiyama School's past. He is Eru Chitanda's uncle, who went missing while traveling, and is presumed dead. Forced to be the scapegoat for a school protest, he took on the full burden and was expelled. He was the president of the ",
        epubFile:
          "https://res.cloudinary.com/anggafile/raw/upload/v1615090299/epub/white_nights_z50npi.epub",
        thumbnail:
          "https://res.cloudinary.com/anggafile/image/upload/v1614961378/images/Y445__boubj0.jpg",
        createdAt: "2017-01-01",
        updatedAt: "2019-01-11",
      },
      {
        title: "The Gift of the Magi",
        publicationDate: "2007",
        pages: "32",
        isbn: "8675760776",
        author: "Haman",
        about:
          "At the request of his older sister, Hōtarō Oreki joins his high school's Classic Literature Club to stop it from being abolished. He meets Eru Chitanda in the club room, and after a short conversation he wonders why she was able to enter the room without ",
        epubFile:
          "https://res.cloudinary.com/anggafile/raw/upload/v1615090299/epub/white_nights_z50npi.epub",
        thumbnail:
          "https://res.cloudinary.com/anggafile/image/upload/v1614961382/images/detailbook_ysaknk.png",
        createdAt: "2017-01-01",
        updatedAt: "2019-01-11",
      },
      {
        title: "A Woman’s Kingdom",
        publicationDate: "2003",
        pages: "32",
        isbn: "770776",
        author: "Rosario",
        about:
          "Mayaka Ibara is introduced, and Hōtarō solves another mystery regarding a book regularly borrowed from the library for a short amount of time, which is actually used by the Art Club for drawings. As they could not find the past anthologies from the Classi",
        epubFile:
          "https://res.cloudinary.com/anggafile/raw/upload/v1615090299/epub/white_nights_z50npi.epub",
        thumbnail:
          "https://res.cloudinary.com/anggafile/image/upload/v1614961379/images/1_hclpzx.png",
        createdAt: "2017-01-01",
        updatedAt: "2019-01-11",
      },
      {
        title: "Past Days of the Classics Club and Its Glory",
        publicationDate: "2011",
        pages: "32",
        isbn: "3787640776",
        author: "Abe Olba",
        about:
          "The club organizes a meet-up to discuss Eru's uncle's mystery. At Eru's house, each member (consisting of Eru, Hōtarō, Satoshi and Mayaka) presents their summary of research and their theories. When it is Hōtarō's turn, he asks to use the toilet, then pie",
        epubFile:
          "https://res.cloudinary.com/anggafile/raw/upload/v1615090299/epub/white_nights_z50npi.epub",
        thumbnail:
          "https://res.cloudinary.com/anggafile/image/upload/v1614961379/images/2_yq7qci.png",
        createdAt: "2017-01-01",
        updatedAt: "2019-01-11",
      },
      {
        title: "To Commit a Grave Sin",
        publicationDate: "2007",
        pages: "32",
        isbn: "987240776",
        author: "Yolari",
        about:
          "One day, while Hōtarō is in class, the class is interrupted by a commotion at another room down the hall. After his class is finished, he spends the rest of the afternoon like he usually does at the Classic Literature Club. But this time, at the club room",
        epubFile:
          "https://res.cloudinary.com/anggafile/raw/upload/v1615090299/epub/white_nights_z50npi.epub",
        thumbnail:
          "https://res.cloudinary.com/anggafile/image/upload/v1614961380/images/320x511_anqrxb.png",
        createdAt: "2017-01-01",
        updatedAt: "2019-01-11",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {},
};
