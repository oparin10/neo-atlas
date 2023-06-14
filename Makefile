.PHONY: run-dev db-up db-down docker-stop-all ui-dev

run-dev:
	cd ./api && dotnet run --project api.csproj

db-up:
	docker-compose -f ./containers/api/docker-compose.yaml up -d

db-down:
	docker-compose -f ./containers/api/docker-compose.yaml down

api-dev: start-db run-dev

docker-stop-all:
	docker stop $$(docker ps -qa)	

ui-dev:
	cd ./ui && ng serve