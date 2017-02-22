Rails.application.routes.draw do

  root 'home#index'

  resources :payments, only: [:new, :create]
end
