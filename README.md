# ReactJs-BiddingWebsite-ArtHunt

This is a real-time bidding webside made by ReactJs、Webpack、Node.js、Socket.io  

Here is the real-time bidding display
![image](https://github.com/LeoHsu0802/ReactJs-BiddingWebsite-ArtHunt/blob/master/Biddingdisplay.gif?raw=true)

Login Page
![image](https://github.com/LeoHsu0802/ReactJs-BiddingWebsite-ArtHunt/blob/master/view1.png)

Bidding Page
![image](https://github.com/LeoHsu0802/ReactJs-BiddingWebsite-ArtHunt/blob/master/view2.PNG)

1.First creat a database(MySQL) for store all item data in it and creat a dataserver connect to MySQL    

2.Fetch the data in component and map it to return the items   

3.Add Login modal and set user name in the state to confirm who make a successful bid   

3.Add bid form and if-else condition to makesure the bid price must higher than recently bid   

4.Use Socket.io to broadcast the successful bid price and the username to all online user   

5.Use react-countdown-now-react to countdown the deadline if time is up then hide the bid form      
