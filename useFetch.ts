import axios from 'axios'

interface obj {
    method:string,
    header:string
}
function useFetch(url:string,options:obj,cb:Function,) {
    try {
        console.log(url, options);
        const func = options?.method == 'post' ? axios.post : axios.get
        if (url&&cb) {
            func(url, options && { headers: options?.header }).then(
                res => {
                    if(res){
                        return cb(null,res)
                    }
                }
            ).catch(err => {
                return cb(err,null)
            })
        }
        else {
            return cb(new TypeError('Please confirm arguments (url,{method,header},callback)'),null)
        }
    } catch (error) {
        return cb(error,null)
    }
}
export default useFetch