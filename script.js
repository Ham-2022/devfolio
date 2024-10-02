// Add event listeners to buttons  
document.querySelectorAll('button').forEach(button => {  
      button.addEventListener('click', () => {  
         console.log(`Button clicked: ${button.textContent}`);  
      });  
   });  
     
   // Update analytics overview  
   const analyticsOverview = document.querySelector('.analytics-overview');  
   const totalClicks = document.querySelector('#total-clicks');  
   const impressions = document.querySelector('#impressions');  
   const conversions = document.querySelector('#conversions');  
     
   // Assume data is fetched from API or database  
   const data = {  
      totalClicks: 100,  
      impressions: 500,  
      conversions: 20  
   };  
     
   totalClicks.textContent = data.totalClicks
   