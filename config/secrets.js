module.exports = {
    secret: process.env.SECRET_KEY,
    linkedin: {
        consumerKey: process.env.LINKEDIN_CONSUMER_KEY,
        consumerSecret: process.env.LINKEDIN_CONSUMER_SECRET,
        callbackURL: 'http://localhost:3000/callback/linkedin',
        profileFields: ['id', 'first-name', 'last-name', 'email-address', 'headline']
    }
}