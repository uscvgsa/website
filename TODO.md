# TODOs

<!-- vim-markdown-toc GFM -->

* [Infrastructure](#infrastructure)
* [General](#general)
* [Pages](#pages)
  * [Home](#home)
  * [About Us](#about-us)
  * [Events](#events)
  * [Gallery](#gallery)
  * [Funding](#funding)
  * [Contact Us](#contact-us)
  * [Resources](#resources)
* [Blog](#blog)
* [Branding](#branding)
* [Switching Tech Stacks](#switching-tech-stacks)
* [Redesign](#redesign)
* [External](#external)

<!-- vim-markdown-toc -->

## Infrastructure

- [x] Create a team GitHub
- [x] Create GitHub repo for website notes
- [ ] Figure out where the website is served
- [ ] Set up Backup or GitHub sync (via some plugin)
- [x] (canceled) Add
      [WordPress GitHub Sync](https://wordpress.org/plugins/wp-github-sync/)
  - This plugin does not work with organization repos
- [ ] Hide wp-admin page -
      https://www.3nions.com/hide-wp-admin-page-wordpress-login/

## General

- [x] (canceled) Unpublish all the nonessential pages, then slowly add it back
  - We should just keep things up.
- [x] Favicon
- [x] Sharper favicon (current one is too small to distinguish)
- [x] (2020-09-19) Rearrange headers (navbar)
  - [x] (2020-09-19) Merge "About Us" with "Our Team" and "Resources"
- [x] Instagram and Facebook feed -- Currently shows up on a lot of pages, which
      is weird
  - [x] (2020-09-19) Remove from pages (it looks awkward)
  - [x] (2020-09-20) Fix Instagram
  - [x] (canceled) Fix Facebook -> Remove entirely since it is the same as
        Instagram
  - [x] (2020-09-20) Only put these in Gallery section, not everywhere
- [x] (canceled) Hamburger does not work on thin screen
  - Actually, it does :D
- [x] (2020-10-04) Optimize pictures with resmush.it plugin
- [ ] Heading styles are weird
  - [ ] H1 is tiny
  - [ ] H2 should be larger
  - [ ] H3 could be a bit smaller
- [ ] Move logo into main header
- [x] (2020-09-28) Update quick links
  - Done by culling pages -- the quick links just link to all pages on the site
- [ ] Remove tab sets and Darko plugin
- [ ] Clean up (remove) draft pages
- [ ] Clean unused plugins

## Pages

- [x] (2020-09-28) Review all pages and cull unneeded ones

### Home

- [x] Move contact form somewhere else?
  - Removed, just see "Contact Us" page
- [x] VGSA news has nothing under it
  - Removed
- [x] Events?
  - Link is still good; now fix the events page itself
- [ ] Find new pictures (current ones outdated)
- [ ] Put blog posts instead of just images (solves above)

### About Us

- [x] Change descriptions of senators
- [x] (2020-09-18) Fix Interested in Joining VGSA section here:
      <http://vgsa.usc.edu/role-senators/> (seems hard to change)
- [ ] Update eligibility requirements for roles (Sebastian)
- [x] (canceled) Make it clear that E-Board members are GSG senators
- [x] (2020-09-20) Update council members and senators with all their info
  - [x] Qihong Wang is missing info
  - [x] Nitin Perumandla is missing info
  - [ ] Mohammad Saeed Abrishami is missing info
  - [x] Kranthi Nuthalapati is missing info
  - [x] Katy Felkner is missing info
- [x] (canceled) Change old council to have consistent style?
  - Lots of work, and the only return is aesthetics
- [x] (canceled) Merge "Current Council" and "Past Council"?
- [ ] Update VGSA documents

### Events

- [x] (2020-09-28) Remove pages for Signature Events and Department Events
- [x] (2020-09-28) Switch Events to a Google Calendar that we update from time
      to time
  - [ ] Style the calendar, perhaps with a plugin?
- [x] (canceled) Use a list of events on the Events page of the website rather
      than a calendar
  - We can use Google Calendar
- [x] SoCal GPS page
  - [x] (2020-10-04) Put at /socal-gps
  - [x] (2020-10-04) Details
  - [x] (2020-10-04) Schedule
  - [x] (2020-10-04) Speakers
  - [x] (2020-10-10) Re-title "Speakers" to "Workshop Speakers"
  - [x] (2020-10-11) Panelists
  - [x] (2020-10-11) More speakers
  - [x] (2020-10-11) Add workshops to the speakers
  - [x] (canceled) Sponsors
  - [x] (2020-10-11) Add event descriptions -- popup / click?
    - Having the description underneath each event would be perfect
  - [x] (2020-10-11) Add panelists to the table
  - [x] (2020-10-11) Cut down speaker descriptions -- strip down or make a
        pop-up
    - [x] (canceled) Try to link to the speakers so you can click the link and
          go down to them
  - [x] (2020-10-11) Add Zoom link to the panel
  - [x] (canceled) Check if popups can be added
  - [x] (2020-10-11) Finish by Monday
  - [x] See [here](https://www.calpolypomonapds.com) for inspiration

### Gallery

- [x] (2020-09-20) Make the Instagram feed the main feature of this page, since
      that is what we update
- [x] (2020-09-20) Fix the Instagram feed display
  - [x] (2020-09-20) Make it span the full page -> Changed the layout
- [ ] Figure out what to do with the Gallery Tab set
  - [ ] Remove the Photo Gallery plugin?

### Funding

- [x] Move Funding Request page from Resources to Events tab, "Events Funding"
- [x] Move the Funding Policies content from the document to the page
  - [x] Exclude last line (Note) in document
- [x] Link to Funding Request form should go to somewhere else (will send link)
- [x] Remove list of USC Approved Vendors, and replace with link to GSG funding
      policies

### Contact Us

- [ ] Remove form
- [ ] E-mail addresses
- [ ] GitHub page

### Resources

- [ ] Add section for DEN students?

## Blog

- [ ] Recap of summer activities
- [ ] Weekly posts
- [ ] First council meeting
- [ ] How Bryon got involved in VGSA in his first year

## Branding

- [x] Experiment with new logo -> See [logo directory](logo/drafts.svg)
- [ ] Play around with more red in the logo

## Switching Tech Stacks

- [ ] Analyze advantages and disadvantages of a move to a technology like Jekyll
      or React or Angular
- [ ] Figure out where we would host the site
- [ ] Jekyll - select a template or build from scratch
  - Integrating Bootstrap?

## Redesign

- [ ] Consider a move to a Jekyll + Material website
  - We will have to make it super easy for non-coding users to use. The most
    they should have to know is how to use Markdown; even better would be to
    have them write things in Google Docs and have it automatically show up on
    the website.
- [ ] Write a design doc

## External

- [ ] Fix description on
      [Wikipedia](<https://en.wikipedia.org/wiki/USC_Viterbi_School_of_Engineering#Viterbi_Graduate_Students_Association_(VGSA)>)
