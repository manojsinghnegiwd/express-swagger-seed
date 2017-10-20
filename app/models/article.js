import mongoose from 'mongoose';

const ArticleSchema = new mongoose.Schema({
	title: String,
	publisher: String,
	publishedDate: { type: Date, default: Date.now },
	link: String
});

export default mongoose.model('Article', ArticleSchema);