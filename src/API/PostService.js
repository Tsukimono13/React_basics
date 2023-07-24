import axios from "axios";

export default class PostService {
    static async getAll(limit = 10, page = 10) {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _limit: limit,
                    _page: page
                }
            })
            return res.data
        } catch (e) {
            console.log(e)
        }
    }
}