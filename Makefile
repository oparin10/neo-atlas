.PHONY: run-dev start-db stop-db docker-stop-all ui-dev

run-dev:
	cd ./api && dotnet run --project api.csproj

start-db:
	docker-compose up -d

stop-db:
	docker-compose down

api-dev: start-db run-dev

docker-stop-all:
	docker stop $$(docker ps -qa)	

ui-dev:
	cd ./ui && ng serve