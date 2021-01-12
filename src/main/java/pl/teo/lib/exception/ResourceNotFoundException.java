package pl.teo.lib.exception;

public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(long id) {
        super("Could not find resource of id " + id);

    }
    public ResourceNotFoundException() {
        super("Resource could not be find");

    }
}
