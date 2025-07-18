# Google Analytics Setup Guide

## 1. Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring" 
4. Create a new account for your website
5. Set up a property for "SIFT Website"
6. Choose "Web" as the platform
7. Enter your website URL: `https://siftaitechnologies.com`
8. Accept terms and conditions

## 2. Get Your Measurement ID

1. After creating the property, you'll see a "Measurement ID" starting with `G-`
2. Copy this ID (it looks like `G-XXXXXXXXXX`)

## 3. Update Your Website

1. Open `/js/analytics.js` in your website files
2. Find the line: `const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';`
3. Replace `'G-XXXXXXXXXX'` with your actual measurement ID
4. Save the file

## 4. Deploy Your Website

Upload your updated website files to your web server. Analytics will start tracking immediately.

## 5. Verify Tracking

1. Visit your website
2. Go to Google Analytics > Real-time > Overview
3. You should see your visit being tracked in real-time

## 6. Key Metrics You Can Track

### Automatic Tracking (No Code Changes Needed)
- **Page Views**: Which pages visitors view most
- **Sessions**: How many people visit your site
- **Users**: Unique visitors over time
- **Bounce Rate**: % of visitors who leave after viewing one page
- **Session Duration**: How long people stay on your site
- **Traffic Sources**: Where visitors come from (Google, direct, social media, etc.)
- **Device/Browser**: What devices and browsers people use
- **Geographic Data**: Where your visitors are located

### Enhanced Tracking (Already Implemented)
- **Demo Bookings**: Tracks when someone clicks "Book a Demo"
- **Solution Views**: Tracks visits to Research, JHA Generation, and Incident Reporting pages
- **Blog Reading Time**: Measures how long people spend reading blog posts
- **Contact Form Submissions**: Tracks contact form interactions
- **File Downloads**: Tracks PDF or document downloads
- **Outbound Clicks**: Tracks clicks to external sites
- **Video Engagement**: Tracks video plays and completion rates

## 7. Privacy Compliance

A basic privacy notice has been added to your website. For full GDPR/CCPA compliance, you may want to:

1. Add a comprehensive privacy policy
2. Implement cookie consent banners
3. Allow users to opt-out of tracking
4. Use Google Analytics 4's enhanced privacy features

## 8. Advanced Features Available

### Custom Events
The analytics script includes functions for tracking custom events:
- `trackEvent(eventName, parameters)`
- `trackDemoBooking(method)`
- `trackContactForm()`
- `trackBlogRead(title, readTime)`
- `trackSolutionView(solutionName)`

### Conversion Tracking
Set up goals in Google Analytics to track:
- Demo bookings as conversions
- Contact form submissions
- Time spent on key pages
- Specific page visits

### E-commerce Tracking
If you add a store or subscription service, the analytics setup can be extended to track:
- Purchases
- Cart abandonment
- Product views
- Revenue metrics

## 9. Useful Reports in Google Analytics

### Most Valuable Reports for Your Business:
1. **Acquisition > Overview**: How people find your website
2. **Engagement > Pages and screens**: Which pages perform best
3. **Engagement > Events**: Custom events like demo bookings
4. **Tech > Browser**: What browsers your visitors use
5. **Demographics > Geographic**: Where your visitors are located

### Setting Up Custom Reports:
1. Go to "Explore" in Google Analytics
2. Create custom reports for:
   - Demo booking conversion rates
   - Blog post performance
   - Solution page engagement
   - Traffic source effectiveness

## 10. Troubleshooting

### If tracking isn't working:
1. Check that your Measurement ID is correct in `/js/analytics.js`
2. Verify the file is being loaded (check browser developer tools)
3. Ensure you're not blocking analytics with ad blockers during testing
4. Check Google Analytics Real-time reports for immediate feedback

### Common Issues:
- **No data showing**: Wait 24-48 hours for full data processing
- **Real-time not working**: Check measurement ID and script loading
- **Events not tracking**: Verify event names and parameters in code

## 11. Next Steps

1. Set up Google Analytics goals for demo bookings
2. Connect Google Analytics to Google Ads (if running ads)
3. Set up weekly/monthly automated reports
4. Create custom dashboards for key metrics
5. Consider adding Google Tag Manager for more advanced tracking

## Support

For technical questions about the implementation, the analytics script is well-documented in `/js/analytics.js`. For Google Analytics questions, refer to the [Google Analytics Help Center](https://support.google.com/analytics).