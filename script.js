var tasks = [
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
    {
        start: '2022-10-07 09:00:00',
        end: '2022-10-07 10:30:00',
        name: '[Criação] - OS - 123',
        id: "Task 0",
        progress: 100,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 10:00:00',
        end: '2022-10-07 11:00:00',
        name: '[Criação] OS - Potato',
        id: "Task 1",
        progress: 50,
        batatinha: "Ignora",
        dependencies: ''
    },
    {
        start: '2022-10-07 11:00:00',
        end: '2022-10-07 12:30:00',
        name: '[Impressão] OS - 123',
        id: "Task 2",
        progress: 50,
        batatinha: "Ignora",
        dependencies: 'Task 0'
    },
    {
        start: '2022-10-08 11:30:00',
        end: '2022-10-08 13:00:00',
        name: '[Impressão] OS - Potato',
        id: "Task 3",
        progress: 10,
        batatinha: "Ignora",
        dependencies: 'Task 1'
    },
]

var gantt_chart = new Gantt(".gantt-target", tasks, {
    on_click: function (task) {
        console.log(task);
    },
    on_date_change: function(task, start, end) {
        console.log(start)
						console.log(end)
    },
    view_mode: 'Hour',
    language: 'ptBr'
});



