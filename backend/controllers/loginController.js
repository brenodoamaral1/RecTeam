const Parse = require('parse/node');

exports.login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const query = new Parse.Query(Parse.User);
        query.equalTo("email", email);

        const user = await query.first();

        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado." });
        }

        const authenticatedUser = await Parse.User.logIn(email, senha);

        if (authenticatedUser) {
            res.status(200).json({
                authenticated: true,
                user: {
                    id: authenticatedUser.id,
                    email: authenticatedUser.get("email")
                }
            });
        } else {
            res.status(401).json({ error: "Credenciais inválidas." });
        }
    } catch (error) {
        console.error("Erro de login:", error);
        res.status(500).json({ error: "Erro interno ao tentar fazer login." });
    }
};
