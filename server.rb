# Server for chess website
# 2016 - Fredrik August Madsen-Malmo
# fredrikaugust@github

require 'sinatra'

# Routes
get '/' do
  erb :index
end
