
const slugModule = {

    slug : (...args)=>
    {
        return args.join(" ").split(" ").join("-");
    }
}

module.exports = slugModule;