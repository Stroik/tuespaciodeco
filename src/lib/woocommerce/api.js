import WoocommerceRestApi from '@woocommerce/woocommerce-rest-api';

const options = {
  url: process.env.STORE_URL,
  consumerKey: process.env.CONSUMER_KEY,
  consumerSecret: process.env.CONSUMER_SECRET,
  version: process.env.STORE_VERSION,
};

export const api = new WoocommerceRestApi(options);

function Api(headers = {}) {
  const opts = {
    ...options,
    axiosConfig: {
      headers: {
        ...headers,
      },
    },
  };
  return new WoocommerceRestApi(opts);
}

export default Api;
