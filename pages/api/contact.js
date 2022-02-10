
const handler = (req, res) => {
    if (req.method === "POST") {
        const { name, email, message } = req.body;
        // some backend validations
        if (
            !email ||
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !message ||
            message.trim() === ''
        ) {
            res.status(422).json({ message: 'Invalid input.' });
            return;
        }

        const newMessage = {
            email,
            name,
            message,
        };
      
        let client;

        try {
            
        } catch (error) {
            
        }

        
        res
            .status(201)
            .json({ message: 'Successfully stored message!', message: newMessage });
    }
}

export default handler;