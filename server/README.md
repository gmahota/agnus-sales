<body>

  <h1>Sales API</h1>

  <p>Welcome to the documentation of the Sales API. This API provides endpoints to manage companies, customers, projects,
    products, orders, document types, document series, and sales documents.</p>

  <h2>Requirements</h2>

  <ul>
    <li>Node.js</li>
    <li>npm (or yarn)</li>
    <li>Postman (for testing requests)</li>
  </ul>

  <h2>Installation</h2>

  <ol>
    <li>Clone the repository:</li>
  </ol>

  <pre><code>git clone https://github.com/your-username/your-repository.git
cd your-repository
</code></pre>

  <ol start="2">
    <li>Install dependencies:</li>
  </ol>

  <pre><code>npm install
# or
yarn install
</code></pre>

  <ol start="3">
    <li>Configure environment variables:</li>
  </ol>

  <p>Create a <code>.env</code> file in the root of your project and add the following variables:</p>

  <pre><code>PORT=5000
</code></pre>

  <ol start="4">
    <li>Start the server:</li>
  </ol>

  <pre><code>node src/server.js
</code></pre>

  <p>The API will be available at <a href="http://localhost:5000">http://localhost:5000</a>.</p>

  <h2>Server File (server.ts)</h2>

  <p>The <code>server.ts</code> file contains the code to set up and start the Express server. Here is an overview of
    the file:</p>

  <pre><code>/* Add the TypeScript code here */
</code></pre>

  <h2>Authentication</h2>

  <p>This API uses Bearer token authentication. Include the access token in authorized requests. An example token is
    provided below:</p>

  <pre><code>{
  "token": "AAAAAAAAAA",
  "type": "string"
}
</code></pre>

  <h2>Routes</h2>

  <h3>Companies</h3>

  <h4>List Companies</h4>

  <ul>
    <li><strong>Endpoint:</strong> <code>GET /api/base/companies</code></li>
    <li><strong>Request:</strong>
      <ul>
        <li>Method: GET</li>
        <li>Authentication: Bearer Token</li>
      </ul>
    </li>
    <li><strong>Example:</strong>
      <pre><code>curl -X GET -H "Authorization: Bearer YOUR_TOKEN" http://localhost:5000/api/base/companies
</code></pre>
    </li>
  </ul>

  

</body>

</html>
