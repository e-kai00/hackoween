# **Boos & Brews Ball**

## **Site Overview**

The site is designed to promote a fictional Halloween event in Dublin, Ireland, as part of the 2023 Halloween Hackathon, organised by Code Institute. It was designed and deployed in four days, by a team of first-time Hackathon participants. The site used a home page to provide details of the site and the event, with a gallery page providing inspiration for fancy dress and a registration form. Additionally, a game, in the form of a Halloween inspired Rock, Paper, Scissors game, offers users a chance to access discounted tickets.

[View the live project here](https://e-kai00.github.io/hackoween/).

![Responsive Screenshot](/docs/responsive.jpg)

---

## Table of contents:

1. [**Site Overview**](#site-overview)
1. [**Planning stage**](#planning-stage)
    - [**_Target Audiences_**](#target-audiences)
    - [**_User Stories_**](#user-stories)
    - [**_Site Aims_**](#site-aims)
    - [**_Color Scheme_**](#color-scheme)
    - [**_Typography_**](#typography)
1. [**Current Features**](#current-features)
    - [**_Home Page_**](#home-page)
    - [**_Gallery Page_**](#gallery-page)
    - [**_Game Page_**](#game-page)
    - [**_Registration Page_**](#registration-page)
1. [**Future-Enhancements**](#future-enhancements)
1. [**Testing Phase**](#testing-phase)
1. [**Deployment**](#deployment)
1. [**Tech**](#tech)
1. [**Credits**](#credits)
    - [**Honorable mentions**](#honorable-mentions)
    - [**General reference**](#general-reference)
    - [**Content**](#content)

---

## **Planning stage**

A series of huddles were organised on the Slack platform and the team quickly decided on a name, 'Skeleton Crew' and a rough idea for a project. It was decided to try and assign tasks on different pages to reduce the likelihood of conflicts. A project board was set up to coordinate tasks to be completed. As the project progressed, and the pages were created, typography, colors and images were agreed upon and applied site wide.

---

### **Target Audiences:**

-   People looking for a Halloween adventure.

---

### **User Stories:**

-   As a user, I want to know what the site is about, so I can  quickly decide if I am interested.
-   As a user, I want to be able to see a gallery, so I can see what the suggested dress code is.
-   As a user, I want to be able to access a registration page, so I can sign up for the event.
-   As a user, I want to be able to play a game, so I can get a discounted ticket.

---

### **Site Aims:**

-   The aim of the site is to promote the event, providing users with a feel of halloween and an explanation of what to expect.  The site aims to drive users towards the registration form, where they can provide their details.  A game further entices users, by offering a chance to access a discount code for the event.

---

### **Color Scheme:**

-   Color were selected from the Coolors website, incorporating the Oranegs associated with pumpkins, the red of blood and complementary colours to provide contrast.

![Coolors Palette](/docs/color-palette.jpg)

---

## **Typography**

-   The fonts used throughout the site were selected from Google Fonts.
-   The main font was selected for it's suitability towards the theme of Halloween, with 'blood' dripping from the letters.  Compleneting it is another spooky themed font, Creepster.
-   A contrasting font was used for clarity and readability throughout the site.

![Font Creepster](/docs/creepster.jpg)
![Font Nosifer](/docs/nosifer.jpg)
![Font Poppins](/docs/poppins.jpg)

---

## **Current Features**

#### _Home Page:_

- The home page serves as the event page, providing times, dates and details of the event.

  - A captivating main banner welcomes visitors with a spooky ghost, a grinning pumpkin, and the word "Halloween," setting the eerie tone for the Halloween-themed website.
  ![Home Page](/docs/features-img/home-banner.png)

  <br>

  -  An enticing invitation to play a game. When users press the button, it triggers an "evil laugh" sound before directing them to the game page.
  ![Home Page](/docs/features-img/game-button.png)

  <br>

  - Discover the exciting party details in three themed boxes, each presenting information about your Halloween party agendas. Users can easily see the essential event information.
  ![Home Page](/docs/features-img/home-agenda.png)

  <br>

#### _Gallery Page:_

- Spooktacular Snapshots Gallery

  - Explore our "Spooktacular Snapshots" gallery, where you can dive into a collection of ghoulishly good photos, capturing spine-tingling memories from our past Halloween events.
  ![Photo gallery](/docs/features-img/gallery.png)

  <br>

  -  Interactive design as you hover over photo thumbnails. They'll brighten and slightly increase in size, offering a dynamic and engaging way to preview the images.
  ![Photo gallery](/docs/features-img/gallery-hover.png)

  <br>

  - When you open a photo, you'll find a mini-gallery at the bottom of the page. This feature allows you to quickly navigate through all the available photos without having to go back to the main gallery, enhancing the user's viewing experience.
  ![Photo gallery](/docs/features-img/gallery-open-photo.png)

  <br>
  - photo gallery is fully mobile-responsive, ensuring that visitors can enjoy the spooky snapshots on any device, be it a computer, tablet, or smartphone, without compromising quality or functionality.  

  ![Photo gallery](/docs/features-img/gallery-mobile.png)
  
  <br>


#### _Game Page:_

-   The game page provides users with a Halloween Challenge, playing a game of rock, paper, scissors, with Halloween themed icons. In this game, Pumkin beats Ghost (pumpkins ward off spirits), Ghost beats Death (you can't kill a ghost) and Death beats Pumpkin (by chopping it up). 
![Game Page](/docs/features-img/game-on.png)

<br>

-  When the user selects a ghoul from the top three icons, their choice is displayed below. After a short timeout, the computer's (Evil's) randomly selected choice is displayed. If there is a win or loss state, the points are incremented accordingly, along with a message reinforcing the state. Otherwise a 'draw' message is displayed.  
![Game Page](/docs/features-img/game-win.png)

<br> 

- When the player recahes a score of 9, an alert box is displayed, informing the user they have one and presenting them with a code and a link to the registration page.  If the computer reaches 9 first, a box appears telling the user they have lost, with an invitation to try again. At either point, the game is reset.  Below the game are two buttons, one of which explains the rules and the other resets the game. 
![Game Page](/docs/features-img/game-rules.png)

<br>

#### _Registration Page:_

- This registration page allows users to sign up for our spooktacular Halloween party. Attendees can provide their basic information, including their first name, last name, and email. Additionally, they have the option to specify their pronouns if they wish.
![Registration Page](/docs/features-img/refistration-form.png)

<br>

- To add a little mystery to the mix, we've incorporated a special game where guests can play to win a unique Promo Code that unlocks exciting discounts.
![Registration Page](/docs/features-img/registration-play-button.png)

<br>

- The Halloween spirit is alive with the option to select a favorite Halloween symbol from a list that includes classic icons like ghosts, jack-o'-lanterns, witches, bats, spiders, skeletons, black cats, vampires, zombies, and werewolves.   
![Registration Page](/docs/features-img/refistration-fav-monster.png)

<br>

## **Testing Phase**

-   Responsiveness - The site was tested for responsiveness on different screen sizes throughout the development stages, using chrome dev tools, which allowed the page to be adjusted to display on small and large screen sizes with media queries.
    ​
-   Functionality - Links checked


## **Deployment**

We deployed the page on GitHub pages via the following procedure:
​

1. From the project's [repository](https://github.com/url), go to the **Settings** tab.
2. From the left-hand menu, select the **Pages** tab.
3. Under the **Source** section, select the **Main** branch from the drop-down menu and click **Save**.
4. A message is displayed to indicate a successful deployment to GitHub pages and provide the live link.
   ​
   The live site can be found at the following URL - [Project Name](https://url/).



## **Tech**

​
The following technologies were employed in the creation of the site:
​

-   HTML
-   CSS
-   JS
-   SweetAlert2
-   Fancybox (for photo gallery)
-   ChatGPT
-   Github



## **Credits**

### **Content:**

-   [Google Fonts](https://fonts.google.com/)

-   [Font Awesome](https://fontawesome.com/icons)

-   [Sweet Alert](https://sweetalert2.github.io/)

-   [Iconset: Materia Halloween free](https://www.iconfinder.com/iconsets/materia-halloween-free/)

-   [Game Icons Author: Icojam](https://www.iconfinder.com/Icojam/)

-   [Photos: pixels.com](https://www.pexels.com/)

-   [Sound for the game button: soundbible.com](https://soundbible.com/2055-Evil-Laugh-Male-6.html#)


### **Members of "The Skeleton Crew"**


- [Antonio-Claudio](https://github.com/Balkaneros91)

- [Jewel Kenyah-Damptey](https://github.com/Apostle01)

- [Carlos Felipe Capobianco Sandoli](https://github.com/felipesandoli)

- [James Evans](https://github.com/broken-helix)

- [Katerina](https://github.com/e-kai00)

- [Filip Van Elslande](https://github.com/Harmonica-Men) 
 (Scrum Leader)