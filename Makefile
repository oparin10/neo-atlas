.PHONY: run-dev start-db stop-db docker-stop-all

run-dev:
	cd ./api && dotnet run --project api.csproj

start-db:
	docker-compose up -d

stop-db:
	docker-compose down

api-dev: start-db run-dev

docker-stop-all:
	docker stop $$(docker ps -qa)	