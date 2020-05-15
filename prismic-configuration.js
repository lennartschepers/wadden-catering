// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = "https://raadselvandewadden.prismic.io/api/v2";

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken =
  "MC5YcERDRFJBQUFDSUFNNDRR.77-977-9KwFP77-9U--_ve-_ve-_ve-_ve-_vWzvv71Z77-977-977-9NTZGLO-_ve-_ve-_vSxXHEbvv71waA";

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === 'paginas') {
    return `/${doc.uid}`
  }
  return '/'
}

// Additional helper function for Next/Link components
export const hrefResolver = (doc) => {
  if (doc.type === 'paginas') {
    return '/[uid]'
  }
  return '/'
}
