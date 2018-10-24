let messages = [];

let id = 0;

module.exports = {
    create: (req, res) => {
        let { text, time } = req.body;
        messages.push({
            id: id,
            text: text,
            time: time
        })
        id++;
        res.status(200).send(messages);
    },

    read: (req, res) => {
        res.status(200).send(messages);
    },

    update: (req, res) => {
        let { id } = req.params;
        let { time, text } = req.body;
        for (let i=0;i<messages.length;i++) {
            if (Number(id)===Number(messages[i].id)) {
                messages[i] = {
                    id: id,
                    text: text || messages[i].text,
                    time: time || messages[i].time
                }
            }
        }
        res.status(200).send(messages);
    },

    delete (req, res) {
        let {id} = req.params;
        for (let i=0;i<messages.length;i++) {
            if (Number(id)===Number(messages[i].id)) {
                messages.splice(i, 1);
            }
        }
        res.status(200).send(messages);
    }
}