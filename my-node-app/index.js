const http = require('http')

const PORT = 3000

const server = http.createServer((request, response)=>{
    if(request.url == '/'){
        response.writeHead(200, {'content-type' : 'text/html'})
        response.write('<h1>Homepage</h1><hr>Home')
        response.end()


    }else if(request.url == '/product'){
        response.writeHead(200, {'content-type' : 'text/html'})
        response.write('<h1>productpage</h1><hr>Product')
        response.end()


    }else if(request.url == '/about'){
        response.writeHead(200, {'content-type' : 'text/html'})
        response.write('<h1>aboutpage</h1><hr>aboutHome')
        response.end()


    }else if(request.url == '/'){
        response.writeHead(404, {'content-type' : 'text/html'})
        response.write('FLIE NOT </h1><hr>Home')
        response.end()


    }
})

server.listen(PORT,()=>{
    console.log('Server running on port 3000');
})