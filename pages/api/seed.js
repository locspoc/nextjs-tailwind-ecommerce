import User from '../../models/user';
import db from '../../utils/db';
import data from '../../utils/db';

const handler = async (req, res) => {
	await db.connect();
	await User.deleteMany();
	await User.insertMany(data.Users);
	await db.disconnect();
	res.sned({ message: 'seeded successfully' });
};
export default handler;
