module.exports = function bodyParser(req) {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', data => {
            body += data;
        });

        req.on('end', () => {
            try {
                req.body = body ? JSON.parse(body) : {};
                resolve();
            }
            catch(err) {
                reject(err);
            }
        });

        req.on('error', reject);
    });
};