import React from 'react';

const About = () => {
    return (
        <div>
            <h2 className="text-center">About me</h2>
            <img
                className="d-block  w-15 mx-auto"
                src={"https://i.ibb.co/NNbfpf9/s.jpg"}
                alt=""
            />
            <p className="text-center">I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience. I like to read, I like to write; I like to think, I like to dream; I like to talk, I like to listen. I like to see the sunrise in the morning, I like to see the moonlight at night; I like to feel the music flowing on my face, I like to smell the wind coming from the ocean. I like to look at the clouds in the sky with a blank mind, I like to do thought experiment when I cannot sleep in the middle of the night. I like flowers in spring, rain in summer, leaves in autumn, and snow in winter. I like to sleep early, I like to get up late; I like to be alone, I like to be surrounded by people. I like country’s peace, I like metropolis’ noise; I like the beautiful west lake in Hangzhou, I like the flat cornfield in Champaign. I like delicious food and comfortable shoes; I like good books and romantic movies. I like the land and the nature, I like people. And, I like to laugh.</p>
            <p className="text-center, fw-bold">
                Question Ans:
                <p>1. Authentication is used to verify the identity of a registered user. Authentication is the process of verifying credentials: user ID (name, email address, phone number) and password. There are many types of authentication like passwords, pins, Two-factor authentication (2FA), and Multi-factor authentication (MFA).


                    Authorization - granting a certain person or group of persons the right to perform certain actions. In a secure environment, after the user's identity has been successfully authenticated by the system. The authorization process determines whether an authenticated person has access to certain resources: information, files, database. But if documents are available for anyone then, authorization without identification and even more so authentication is very possible.

                    Example: Google asks for a password, the user enters it, and the system agrees that the user seems to be really real since the password matched - this is authentication

                    After that, the system will grant the user the right to read letters in his mailbox and stuff like that - this is an authorization.

                    .</p>

                <p>
                    2 Firebase can help with user registration and authorization, session storage (authorized users), and media files that can be easily accessed.

                    Firebase is really very beginner-friendly and offers a lot of great features other than authentication

                    Firestore: A scalable, real-time NoSQL database solution that any frontend can use
                    Storage: We use it mainly for images.
                    Notifications: A very easy-to-implement notification service.
                    Hosting: affordable and convenient hosting of static sites. We hosted our React frontend application there.
                    Functions: work in the cloud and can respond to any events at the data level. We used them mainly for sending notifications.

                </p>
                <p>
                    3.
                    irebase stores text data in JSON format and provide convenient methods for reading, updating, and retrieving the data.

                    we use  Firebase because the application does not require a backend, it only needs to implement a user interface. It has great features for free and it is very easy to use. it has flexibility and speed of deploying to a project. It is a powerful tool, in one evening we can add the functionality of any module by reading, saving data, and showing the customer a functional example.

                    Alternative to firebase for authentication:
                    Keycloak, Okta,Supabase,auth0,Ory,STYTCH, etc.
                </p>
            </p>
        </div>
    );
};

export default About;