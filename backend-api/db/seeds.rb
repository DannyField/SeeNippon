# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'Created new entry'

b = Blog.create(
    title: 'My first day in Tokyo', 
    description: 'I arrived late in Tokyo on the last plane. It was cold, but I was happy to breathe in the fresh air of Tokyo. Etc etc', 
    image: '', 
    city: 'Tokyo', 
    prefecture: 'Tokyo', 
    tipOne: 'Make sure to get a phone SIM before arriving in Japan', 
    tipTwo: 'Learning some basic Japanese will make travelling much easier', 
    tipThree: 'There are vending machines on every street corner',
)

puts 'completed post'