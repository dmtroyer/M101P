require 'rubygems'
require 'mongo'

include Mongo

mongo_client = MongoClient.new

photos = mongo_client.db('photos')

albums = photos.collection('albums')
images = photos.collection('images')

images_removed = 0

images.find.each do |image|
  count = albums.find({:images => image['_id']}).count
  if count == 0
    images.remove(:_id => image['_id'])
    images_removed += 1
  end
end

puts "#{images_removed.to_s} image(s) removed."
