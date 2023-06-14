.PHONY: run-dev start-db stop-db docker-stop-all ui-dev

run-dev:
	cd ./api && dotnet run --project api.csproj

start-db:
	docker-compose -f ./containers/api/docker-compose.yaml up -d

stop-db:
	docker-compose -f ./containers/api/docker-compose.yaml down

api-dev: start-db run-dev

docker-stop-all:
	docker stop $$(docker ps -qa)	

ui-dev:
	cd ./ui && ng serve