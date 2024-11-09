
import * as contentful from "contentful"
const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID || 'ruv608cqwfxn',
    accessToken: process.env.CONTENTFUL_API_TOKEN || 'WFGudubKnl21xBw72EpN_zeaiFqhj5uYiq_cBgTI7_k',
    environment: process.env.CONTENTFUL_ENVIRONMENT_ID || 'master', // Optional, defaults to 'master'

})
export default client