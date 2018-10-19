
$(function() {
  
   // this suite test for RSS feeds definitions, the allFeeds variable and feed url definitions
    describe('RSS Feeds', function() {
      
      //this test if the allFeeds variable is defined and also that its length is greater than 0
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         /*this test loops through the feeds in the allFeeds object and ensure 
         it has a URL defined and also that the URL is not empty*/
         it('Url are defined',function(){
            for(let feed of allFeeds){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
         });

         /*this test loops through the feed in the allFeeds object and ensure 
         it has a name  defined and also that the name is not empty*/
          it('Name are defined',function(){
            for(let feed of allFeeds){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
         });
    });


    /* the menu test suite */
     describe('The menu',function(){
        /*this tests if the menu is hidden by default.
         */
            var body = document.querySelector('body');
            var menu = document.querySelector('.menu-icon-link');

         it('Should be hidden by default',function(){
            expect(body.classList.contains('menu-hidden')).toBe(true);
         });


         /* this test ensures the menu changes
          * visibility when the menu icon is clicked. the test
          * have two expectations: 
          *1. does the menu display when clicked and 
          *2. does it hide when clicked again.
          */
         it('Should toggle when clicked',function(){
            
           
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false); //on state: when toggled or clicked the menu should be visible hence the menu-hidden class shouldnt be present
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true); //on state: when toggled or clicked the menu should be visible hence the menu-hidden class shouldnt be present
         });

      });

    /* "Initial Entries" test suite*/
     describe('Initial Entries',function(){
        /* this test ensures that when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
         beforeEach(function(done){
            loadFeed(0,done);
         });

         it('at least 1 entry is found when loadFeed function completes work',function(){
            const feed = document.querySelectorAll('.feed .entry');
            expect(feed.length > 0).toBe(true);
         });
     });

    /* "New Feed Selection" test suite*/
      describe('New Feed Selection',function(){
        /* this test ensures that when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        let feedOne,
            feedTwo;

         beforeEach(function(done){
            loadFeed(0,function(){
                feedOne = $('.feed').html();
               loadFeed(1,function(){
                  feedTwo = $('.feed').html();
                  done();
                });
            });
            
           
         });

         it('Content should change',function(){
             expect(feedOne != feedTwo).toBe(true);
         });
     });
}());


