# Airflow

Airflow organices tasks in a DAG. A DAG (Directed Acyclic Graph) is a collection of all the tasks you want to run, organized in a way that reflects their relationships and dependencies.

* Each task could be Bash, Python or others.
* You can connect the tasks in a DAG as you want (which one depends on which).
* Tasks could be built from Jinja templates.
* It has a nice and comfortable UI.

You can also use _Sensors_: you can wait for certain files or database changes for activate anoter jobs.

## References

* https://github.com/apache/airflow
* https://medium.com/videoamp/what-we-learned-migrating-off-cron-to-airflow-b391841a0da4
* https://medium.com/@rbahaguejr/airflow-a-beautiful-cron-alternative-or-replacement-for-data-pipelines-b6fb6d0cddef

