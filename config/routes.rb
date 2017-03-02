Rails.application.routes.draw do

  root 'home#index'

  resources :payments, only: [:create]
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      get '/projects/:name', to: "projects#show"
    end
  end
end
